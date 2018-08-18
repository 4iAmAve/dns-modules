import React from "react";

import { storiesOf } from "@storybook/react";
import {parseDateAndTime} from '@dns/utils';
import { Table } from "./Table";
import { wInfo } from "../../utils";

const columns = [
  {
    definition: 'select',
    label: '',
  },
  {
    definition: 'expand',
    label: 'Details',
  },
  {
    definition: 'interfaceId',
    label: 'InterfaceId',
  },
  {
    definition: 'fa_number',
    label: 'FA Number',
  },
  {
    definition: 'type',
    label: 'Type',
  },
  {
    definition: 'occurred_at',
    label: 'Time',
  },
  {
    definition: 'run_time',
    label: 'Run TIme',
  },
  {
    definition: 'delay',
    label: 'Delay',
  },
  {
    definition: 'queue_number',
    label: 'Queue Number',
  },
  {
    definition: 'inbound_file',
    label: 'Inbound File',
  },
  {
    definition: 'outbound_file',
    label: 'Outbound File',
  },
];
const tableData = [
  {
    interfaceId: 'Sif_aiSELECT',
    occurred_at: parseDateAndTime(new Date().toString()),
    run_time: '12s',
    delay: '1s',
    inbound_file: 'http://bla.com',
    outbound_file: 'http://bla.com',
    type: 'AWB',
    fa_number: 'SXXLLL',
    queue_number: 34,
    tenant: 'label'
  }
];
const additionalColumns = [
  {
    definition: 'tenant',
    label: 'Interfaces',
    type: 'chip',
    onClick: (e) => {}
  },
  {
    definition: 'operations',
    label: '',
    operations: [
      {
        icon: 'edit',
        type: 'normal',
        action: (e) => {},
      },
      {
        icon: 'delete',
        type: 'danger',
        action: (e) => {},
      },
    ],
    withHeaderOperation: [
      {
        icon: 'add',
        type: 'normal',
        action: (e) => {},
      },
    ]
  }
];

const addedColumns = columns.concat(additionalColumns);

storiesOf("Table", module).addWithJSX(
  "<Table />",
  wInfo(`
  ### Usage
  ~~~js
    <Table
      emptyLabel="no data available"
      columns={${JSON.stringify(columns)}}
      data={${JSON.stringify(tableData)}}
    />
  ~~~`)(() => (
    <Table
      emptyLabel="no data available"
      columns={addedColumns}
      data={tableData}
    />
  ))
);
