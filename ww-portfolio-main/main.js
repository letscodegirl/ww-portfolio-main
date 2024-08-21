// A $( document ).ready() block.
$(document).ready(function () {

  $(".hamburger-button").click(function () {

    $(this).toggleClass('active');
    $(".mobile-menu").fadeToggle();

  });

    // animate on scroll - activate
    AOS.init({
        duration: 500 // values from 0 to 3000, with step 50ms
    });

});


// learn

// function searchTable() {
//     let input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("searchInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");

//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[1]; // Index for title column
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }

// document.getElementById('search-button').addEventListener('click', function() {
//     var searchValue = document.getElementById('search-input').value;
//     console.log('Searching for:', searchValue);
//     // Implement your search logic here
// });

// document.getElementById('submit-button').addEventListener('click', function() {
//     console.log('Submit button clicked');
//     // Implement your submit logic here
// });

// document.getElementById('document-upload-form').addEventListener('submit', function(e) {
//   e.preventDefault(); // Prevent the default form submission
//   var file = document.getElementById('document-upload').files[0];
//   // Implement file upload functionality
// });
