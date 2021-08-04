import React from "react";
import { Button, IconButton } from "../../base-components";

function Pagination({ current = 0, total, setCurrentPage }) {
  const getDefaultButtons = () => {
    return [...Array(total).keys()].map((value, index) => {
      return <Button text={value+1} key={`button-${index}`} onClick={() => { setCurrentPage(index) }}/>
    })
  }
  const getOptimizedButtons = () => {
    const firstItems = []
    const centerItems = []
    const endItems = []
    let highlightIndex = current
    if (current < 2 || current > (total - 3)) {
      firstItems.push(0); firstItems.push(1); firstItems.push(2);
      centerItems.push('...')
      endItems.push(total - 3); endItems.push(total - 2); endItems.push(total - 1)
      highlightIndex = current < 2 ? current : (7 - (total - current))
    } else {
      firstItems.push(<IconButton type='previous' title='Previous' onClick={() => { setCurrentPage(current - 1) }}/>);
      firstItems.push("...");
      centerItems.push(current - 1); centerItems.push(current); centerItems.push(current + 1)
      endItems.push("...");
      endItems.push(<IconButton type='next' title='Next' onClick={() => { setCurrentPage(current + 1) }}/>);
      highlightIndex = 3
    }
    return firstItems.concat(centerItems, endItems).map((value, index) => {
      return isNaN(value) ?
      <span onClick={() => { setCurrentPage(index) }}>{value}</span> :
      <Button
        key={`button-${index}`}
        text={value+1}
        backgroundColor={ index === highlightIndex ? 'antiquewhite': 'none' }
        onClick={() => { setCurrentPage(value) }}
      />
    })
  }
  return (
    <div className={ total < 7 ? "pagination paginationLeft" : "pagination" }>
      <IconButton type='left-most' title='First items' onClick={() => { setCurrentPage(0) }}/>
      {
        total < 7 ?
        getDefaultButtons()
        :
        getOptimizedButtons()
      }
      <IconButton type='right-most' title='Last items' onClick={() => { setCurrentPage(total-1) }}/>
    </div>
  );
}
export default Pagination;
