import React, { useEffect, useState } from 'react'
import Item from './Item'

/**
 * @function List
 */
const List = (props) => {

  const data = props.results  
  var booklist = []
  for (var d in data) {
    booklist.push(data[d])
  }

  //console.log(booklist)

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-3">
        {booklist.map(book=>(
          <Item key={book._id} title={book.title} year={book.year} author={book.author} content={book.content} image={book.image_src}/>
        ))}
      </div>
    </div>
  )
}

export default List;

  /*
  const notes = [{"title":"Knack ...and How to Get It, The","author":"Fredek","year":1958,"content":"Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","image":"http://dummyimage.com/143x100.png/cc0000/ffffff"},
  {"title":"Two English Girls (Les deux anglaises et le continent)","author":"Cinderella","year":2009,"content":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.","image":"http://dummyimage.com/103x100.png/ff4444/ffffff"},
  {"title":"Playing for Keeps","author":"Sinclare","year":2011,"content":"Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.","image":"http://dummyimage.com/238x100.png/5fa2dd/ffffff"},
  {"title":"Zeder","author":"Alma","year":1988,"content":"Nulla suscipit ligula in lacus.","image":"http://dummyimage.com/109x100.png/5fa2dd/ffffff"},
  {"title":"Boys Love","author":"Helga","year":1997,"content":"Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.","image":"http://dummyimage.com/158x100.png/cc0000/ffffff"},
  {"title":"Doctor, The","author":"Irving","year":1997,"content":"In eleifend quam a odio. In hac habitasse platea dictumst.","image":"http://dummyimage.com/146x100.png/dddddd/000000"},
  {"title":"Astronaut's Wife, The","author":"Axe","year":1995,"content":"Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","image":"http://dummyimage.com/212x100.png/cc0000/ffffff"},
  {"title":"Eve's Bayou","author":"Lana","year":1990,"content":"Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.","image":"http://dummyimage.com/105x100.png/ff4444/ffffff"},
  {"title":"Saturday the 14th","author":"Heriberto","year":2004,"content":"Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.","image":"http://dummyimage.com/117x100.png/5fa2dd/ffffff"},
  {"title":"Return of the Living Dead Part II","author":"Janey","year":1997,"content":"Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.","image":"http://dummyimage.com/203x100.png/ff4444/ffffff"},
  {"title":"Valachi Papers,The","author":"Rochester","year":2011,"content":"Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.","image":"http://dummyimage.com/145x100.png/ff4444/ffffff"},
  {"title":"House of Mirth, The","author":"Erick","year":2005,"content":"Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.","image":"http://dummyimage.com/207x100.png/dddddd/000000"},
  {"title":"Road House","author":"Johannah","year":1991,"content":"Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.","image":"http://dummyimage.com/240x100.png/cc0000/ffffff"},
  {"title":"Chaplin","author":"Emylee","year":2007,"content":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.","image":"http://dummyimage.com/137x100.png/dddddd/000000"},
  {"title":"Family Tree, The","author":"Diandra","year":1990,"content":"Pellentesque at nulla.","image":"http://dummyimage.com/215x100.png/dddddd/000000"},
  {"title":"Runner Runner","author":"Tammie","year":1979,"content":"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.","image":"http://dummyimage.com/184x100.png/5fa2dd/ffffff"},
  {"title":"Last Ride, The","author":"Hedi","year":2007,"content":"Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.","image":"http://dummyimage.com/135x100.png/5fa2dd/ffffff"},
  {"title":"Ponette","author":"Wilona","year":2005,"content":"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.","image":"http://dummyimage.com/226x100.png/5fa2dd/ffffff"},
  {"title":"St. Valentine's Day Massacre, The","author":"Kippy","year":2004,"content":"Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.","image":"http://dummyimage.com/102x100.png/cc0000/ffffff"},
  {"title":"Ain't Them Bodies Saints","author":"Ky","year":2001,"content":"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","image":"http://dummyimage.com/102x100.png/5fa2dd/ffffff"}]
*/