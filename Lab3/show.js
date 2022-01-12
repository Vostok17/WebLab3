'use strict';

const datesList = document.querySelector('.submenu');
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

const displayItems = items => {
    items.forEach(item => {
        const liEl = document.createElement('li');
        liEl.innerHTML = item.date;
        datesList.appendChild(liEl);
    });
};

fetchGraphQL(getItems, 'MyQuery', {}).then(output => {
    const items = output.data.Dates;
    displayItems(items);
});
