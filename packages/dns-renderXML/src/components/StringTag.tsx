import * as React from 'react';

import generateAttributes from '../utils/generateAttributes';

export interface StringTagProps {
  data: any;
  curDepth: number;
  collapsed?: boolean;
  collapseStringsAfterLength?: number;
  shouldCollapse?: boolean;
  indentWidth?: number;
}

const StringTag: React.SFC<StringTagProps> = (props: StringTagProps) => {
  const { curDepth, data } = props;
  let nodeStringStart = '';
  let nodeStringText = null as any;

  const inlineStyle = {
    marginLeft: `${curDepth + 1}em`,
  };

  nodeStringStart += `<${data.nodeName}`;

  const attributes = generateAttributes(data);

  if (attributes.length) {
    nodeStringStart += ` ${attributes}`;
  }

  nodeStringStart += `>`;

  if (data.childNodes && data.childNodes.length) {
    let text = [] as any;
    Object.keys(data.childNodes).forEach((element: any, id: any)  => {
      if (data.childNodes[element].nodeName === '#text') {
        text.push(
          <span
            className="rx_elem_text"
            key={`xml-text-${curDepth}-${id}`}
          >
            {` ${`${data.childNodes[element].nodeValue}`.trim()} `}
          </span>
        );
      }
    });

    nodeStringText = text && text.length ? text : null;
  }

  return (
    <div style={inlineStyle}>
      <span className="rx_elem_tag">{nodeStringStart}</span>
      {nodeStringText}
      <span className="rx_elem_tag">{`</ ${data.nodeName}>`}</span>
    </div>
  );
};

export default StringTag;
