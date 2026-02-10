import { HtmlEditor, Inject, Link,Image, Audio, Video, RichTextEditorComponent, Toolbar, QuickToolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

function App() {
  const tools = {
    items: [ 'Image', 'Audio', 'Video', 'Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList', 'UnorderedList', '|',
    'CreateLink', '|', 'SourceCode', 'Undo', 'Redo']
  };

  const insertImageSettings = {
    saveUrl: 'https://localhost:7021/api/RichTextEditor/SaveFile',
    path: 'https://localhost:7021/api/RichTextEditor/'
  }
  const insertVideoSettings = {
    saveUrl: 'https://localhost:7021/api/RichTextEditor/SaveFile',
    path: 'https://localhost:7021//api/RichTextEditor/'
  }
  const insertAudioSettings = {
    saveUrl: 'https://localhost:7021/api/RichTextEditor/SaveFile',
    path: 'https://localhost:7021/api/RichTextEditor/'
  }

  return (
    <RichTextEditorComponent toolbarSettings={tools} insertImageSettings={insertImageSettings} insertAudioSettings={insertAudioSettings} insertVideoSettings={insertVideoSettings}  >
      <Inject services={[Toolbar, Image, Link,Audio, Video, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}

export default App;