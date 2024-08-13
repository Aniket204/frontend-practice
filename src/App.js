import Carousel from './components/Carousel/Carousel';
import FileExplorer from './components/FileExplorer/FileExplorer';

function App() {

  const slides = [
    { name: 'Slide 1' },
    { name: 'Slide 2' },
    { name: 'Slide 3' },
    { name: 'Slide 4' },
    { name: 'Slide 5' },
  ];

  const folderStructure = {
    name: 'root',
    type: 'folder',
    children: [
      {
        name: 'Folder 1',
        type: 'folder',
        children: [
          { name: 'File 1.1', type: 'file' },
          { name: 'File 1.2', type: 'file' },
          {
            name: 'Subfolder 1.1',
            type: 'folder',
            children: [
              { name: 'File 1.1.1', type: 'file' },
              { name: 'File 1.1.2', type: 'file' }
            ]
          },
        ]
      },
      {
        name: 'Folder 2',
        type: 'folder',
        children: [{ name: 'File 2.1', type: 'file' }]
      },
      { name: 'File 3', type: 'file' }
    ]
  };

  return (
    <div>
      <Carousel items={slides} infinite={true}/>
      <FileExplorer items={folderStructure} />
    </div>
  );
}

export default App;