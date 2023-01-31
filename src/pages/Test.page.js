import { useEffect, useState } from 'react';
import Parser from "html-react-parser";

const TestPage = () => {
  const [content, setContent] = useState();

  const handleClick = () => {
    console.log('test');
  }

  const replace = (domNode) => {
    if (domNode.attribs && domNode.attribs.ref === "click") {
      return (
        <div
          style={{
            backgroundColor: "gray",
            padding: "4px 8px",
            width: "100px",
            textAlign: "center"
          }}
          onClick={handleClick}
        >
          Click
        </div>
      );
    }
  };

  useEffect(() => {
    const data = '<div ref=click>click</div>'
    setContent(data);
  }, []);

  return (
    <div>{content && Parser(content, { replace })}</div>
  )
}

export default TestPage