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
  *) task_usage ;;
esac
