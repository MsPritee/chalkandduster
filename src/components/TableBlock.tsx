import React from 'react';

interface Column {
  key: string;
  header: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
  className?: string;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  compact?: boolean;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  className = '',
  striped = true,
  hoverable = true,
  bordered = false,
  compact = false
}) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className={`w-full ${bordered ? 'border border-gray-300' : ''}`}>
        <thead>
          <tr className={`bg-indigo-600 text-white ${bordered ? 'border-b border-gray-300' : ''}`}>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`
                  ${compact ? 'px-3 py-2' : 'px-6 py-4'}
                  text-${column.align || 'left'}
                  font-semibold
                  ${column.width ? `w-${column.width}` : ''}
                  ${bordered ? 'border-r border-gray-300 last:border-r-0' : ''}
                `}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`
                ${striped && rowIndex % 2 === 1 ? 'bg-gray-50' : ''}
                ${hoverable ? 'hover:bg-indigo-50 transition-colors duration-150' : ''}
                ${bordered ? 'border-b border-gray-300' : ''}
              `}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`
                    ${compact ? 'px-3 py-2' : 'px-6 py-4'}
                    text-${column.align || 'left'}
                    ${bordered ? 'border-r border-gray-300 last:border-r-0' : ''}
                  `}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;