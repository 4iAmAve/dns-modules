#!/bin/bash

############################################
#
# Keep off, or at least be gentle!
# For local development only.
# Aves' private parts from here on.
#
##########################################

set -eu

function ensure_yarn {
  if [ ! -d node_modules ]; then
    yarn install --no-progress
  fi

  if [ yarn.lock -nt node_modules ]; then
    yarn install
    touch node_modules
  fi
}

function task_build_version {
  yarn buildversion
}

function task_init {
  ensure_yarn
  npm install --global lerna
  yarn bootstrap
}

#########################
## BUILD
########################
function task_build {
  CMD=${1:-}
  shift || true
  case ${CMD} in
    gsp) task_run_build_fe ;;
    *) task_run_build ;;
  esac
}

function task_run_build_fe {
  yarn build:fe
}

function task_run_build {
  yarn build
}

#########################
## PRE-E2E
########################
function task_pre_e2e {
  CMD=${1:-}
  shift || true
  case ${CMD} in
    gsp) task_run_pre_e2e_fe ;;
    *) task_run_pre_e2e ;;
  esac
}

function task_run_pre_e2e_fe {
  yarn pree2e:fe
}
function task_run_pre_e2e {
  yarn pree2e
}

#########################
## E2E
########################
function task_e2e {
  CMD=${1:-}
  shift || true
  case ${CMD} in
    gsp) task_run_e2e_fe ;;
    *) task_run_e2e ;;
  esac
}

function task_run_e2e {
  yarn e2e:fe
}

function task_run_e2e_fe {
  yarn e2e
}

#########################
## TEST
########################
function task_test {
  echo "Run e2e suite"
  CMD=${1:-}
  shift || true
  case ${CMD} in
    gsp) task_run_test_fe ;;
    *) task_run_test ;;
  esac
}

function task_run_test_fe {
  yarn e2e:fe
}

function task_run_test {
  yanr e2e
}

#########################
## MISC
########################
function task_lint {
  yarn lint
}

function task_clean_build {
  yarn clean:dist
}

#########################
## DOCKER DO ALL
########################
function task_docker_do_all {
  CMD=${1:-}
  shift || true
  case ${CMD} in
    gsp) task_docker_do_all_fe ;;
    cc) task_docker_do_all_cc ;;
    *) task_docker_do_all_usage ;;
  esac
}

function task_docker_do_all_fe {
  cd packages/frontend &&
  ./go docker do_all && cd ../..
}

function task_docker_do_all_usage {
  echo "Usage: $0 fe"
  exit 1
}

#########################
## DOCKER PUSH
########################
function task_docker_push {
  CMD=${1:-}
  shift || true
  case ${CMD} in
    gsp) task_docker_push_fe ;;
    *) task_docker_push_usage ;;
  esac
}

function task_docker_push_fe {
  cd packages/frontend &&
  ./go docker push && cd ../..
}

function task_docker_push_usage {
  echo "Usage: $0 fe"
  exit 1
}

#########################
## TAGGING
########################
function task_tag {
  CMD=${1:-}
  shift || true
  case ${CMD} in
    add) task_add_tag ;;
    remove) task_remove_tag ;;
    *) task_tag_usage ;;
  esac
}

function task_run_e2e_on_request {
  echo "Initially run e2e tests"
  read -r -p "Are you sure you want to continue? [y/N] " response
  case "$response" in
    [yY][eE][sS]|[yY])
      read -p 'Package name: ' packagevar
      echo "Running e2e for $packagevar"
      yarn e2e:$packagevar &&
      task_run_e2e_on_request
      ;;
    *)
      echo "No e2e tests will be performed"
      true
      ;;
  esac
}

function task_add_tag {
  echo "Starting tag process"
  task_run_e2e_on_request
  read -r -p "Are you sure you want to continue? [y/N] " response
  case "$response" in
    [yY][eE][sS]|[yY])
      read -p 'Name the tag: ' tagvar
      echo "Tagging current version with v$tagvar"
      git tag -fa v$tagvar -m "Add tag v$tagvar"
      git push --tag

      exit 1
      ;;
    *)
      echo "Cancel process"
      exit 1
      ;;
  esac
}

function task_remove_tag {
  echo "Starting tag removal"
  read -r -p "Are you sure you want to continue? [y/N] " response
  case "$response" in
    [yY][eE][sS]|[yY])
      read -p 'Name the tag to be removed: ' tagvar
      git push origin :refs/tags/v$tagvar

      exit 1
      ;;
    *)
      echo "Cancel process"
      exit 1
      ;;
  esac
}

function task_tag_usage {
  echo "Usage: $0 add | remove"
  exit 1
}

function task_usage {
  echo "Usage: $0 build | init | start | e2e | lint | build_version | protractor | pree2e"
  echo "All tasks (except for lint and build_version) can be scoped by adding: fe"
  exit 1
}

CMD=${1:-}
shift || true
case ${CMD} in
  docker_do_all) task_docker_do_all ${@:1} ;;
  docker_push) task_docker_push ${@:1} ;;
  build) task_build ${@:1} ;;
  init) task_init ;;
  start) task_start ${@:1} ;;
#  run) task_run ${@:1} ;;
#  test) task_test ${@:1} ;;
  pree2e) task_pre_e2e ${@:1} ;;
  e2e) task_e2e ${@:1} ;;
  lint) task_lint ;;
  build_version) task_build_version ;;
  tag) task_tag ${@:1} ;;
  *) task_usage ;;
esac
