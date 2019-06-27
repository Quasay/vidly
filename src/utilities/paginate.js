import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}

/*

    By using the lodash library this function slices 
    all of the items in our movies array dependent 
    on the page size parameter. Then takes however much
    via the pageSize parameter. Value returns our array 
    back into a normal array

*/
