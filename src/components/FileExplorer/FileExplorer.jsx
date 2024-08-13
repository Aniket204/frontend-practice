import React, { useState } from 'react';

const Folder = ({ folder, level }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div style={{ paddingLeft: 25, marginLeft: level, userSelect: 'none'}}>
      {folder.type === 'folder' ? (
        <div>
          <span onClick={toggleOpen} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
            {isOpen ? '📂' : '📁'} {folder.name}
          </span>
          {isOpen &&
            folder.children.map((child, index) => (
              <Folder key={index} folder={child} level={level + 1} />
            ))}
        </div>
      ) : (
        <div>📄 {folder.name}</div>
      )}
    </div>
  );
};

const FileExplorer = ({items}) => {
  return (
    <div style={{paddingLeft: '100px'}}>
      <h3>FileExplorer</h3>
      <Folder folder={items} level={0}/>
    </div>
  );
}

export default FileExplorer;