import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class ArticleDetails extends React.Component {

    render() {
        // var { selectedArticle } = this.state;

        var url='https://blog.bitsrc.io/best-practices-in-using-iframes-with-react-6193feaa1e08';
        return <iframe title="Selected Title" id='articleFrame' style={{width:'80%',height:'700px'}} src={url}/>;
      }
}

export default ArticleDetails;
