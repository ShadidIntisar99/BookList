

//DOM Selection
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click',function(e){

    e.preventDefault();

    if(title.value == '' && author.value == '' && year.value == '')
    {
        alert("Do NOT keep fields empty");
    }
    else if(title.value == '' || author.value == '' || year.value == '')
    {
        alert("Please Enter all the fields");
    }
    else{
        
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);

    }


//     console.log({title:title.value,author:author.value,year:year.value})

//     //store data in firebase
//     fetch("https://formdata-to-firebase-default-rtdb.firebaseio.com/bookdata.json", {
//         method: "POST", 
//         body: JSON.stringify({title:title.value,author:author.value,year:year.value})
//       }).then(res => {
//         console.log("Request complete! response:", res);
//         //get request 
//         if(res.status===200){
//             fetch('https://formdata-to-firebase-default-rtdb.firebaseio.com/bookdata.json')
//   .then((response) => {
//     return response.json();
//   })
//   //convert wierd notation un firebase to array indices
//   .then((data) => {
//       console.log(Object.entries(data).map(e => Object.assign(e[1], { key: e[0] })));

//     });


//         }
//       });

      
});



