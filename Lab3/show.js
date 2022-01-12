'use strict';

const datesList = document.querySelector('.dropdown-content');
async function fetchGraphQL(operationsDoc, _operationName, _variables) {
    const result = await fetch('https://lab3df.herokuapp.com/v1/graphql', {
        method: 'POST',
        body: JSON.stringify({
            query: operationsDoc,
            variables: _variables,
            operationName: _operationName,
        }),
    });

    return result.json();
}

const getItems = `query MyQuery {
    Dates {
      date
    }
  }`;

const showItems = items => {
    items.forEach(item => {
        const elem = document.createElement('p');
        elem.innerText = item.date;
        datesList.appendChild(elem);
    });
};

fetchGraphQL(getItems, 'MyQuery', {}).then(output => {
    const items = output.data.Dates;
    showItems(items);
});
