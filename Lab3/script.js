'use strict';

const insertItem = document.querySelector('.insert-item');
async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch('https://web-lab3k.herokuapp.com/v1/graphql', {
        method: 'POST',
        body: JSON.stringify({
            query: operationsDoc,
            variables,
            operationName,
        }),
    });
    return result.json();
}

const addItem = `mutation MyMutation($date: String = "") {
    insert_Dates_one(object: {date: $date}) {
      id
    }
}`;

const sendItem = async event => {
    event.preventDefault();

    const dateF = insertItem.elements.date.value;
    await fetchGraphQL(addItem, 'MyMutation', {
        date: dateF,
    });
};

insertItem.addEventListener('submit', sendItem);
