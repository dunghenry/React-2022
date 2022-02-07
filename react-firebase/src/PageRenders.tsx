import React from 'react';
import {useParams} from 'react-router-dom';
import {IParams} from './types';
const generatePage = (name: string) => {
    const page = () => require(`./pages/${name}`).default
    console.log(page)
    try {
        return React.createElement(page());
    } catch (error) {
        return <h1>Page Not Found</h1>
    }
}
const PageRenders = () => {
    const {page, id} : IParams = useParams();
    let name = '';
    if(page){
        name = id ? `${page}/[id]` : `${page}`
    }
    // console.log(name)
  return generatePage(name)
};

export default PageRenders;
