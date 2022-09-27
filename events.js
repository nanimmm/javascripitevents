var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }





var leftDiv= document.createElement('div');

document.body.append(leftDiv);

leftDiv.classList.add('leftDiv');


var rightDiv= document.createElement('div');

document.body.append(rightDiv);

rightDiv.classList.add('rightDiv');



var leftImg = document.createElement('img');
leftImg.src= productData.preview;
leftImg.alt= "preview";
leftDiv.append(leftImg);

leftImg.classList.add('leftimage')



var para = document.createElement('p');
para.innerText= productData.name;
rightDiv.append(para);
para.classList.add('para');


var para1 = document.createElement('p');
para1.innerText= productData.brand;
rightDiv.append(para1);
para1.classList.add('para1');


var para2 = document.createElement('p');
para2.innerText= "Price: RS" + " ";
rightDiv.append(para2);
para2.classList.add('para2');

var span = document.createElement('span');
span.innerText= productData.price;
rightDiv.append(span);

span.classList.add('span');


var para3 = document.createElement('p');
para3.innerText= "Description";
rightDiv.append(para3);
para3.classList.add('para3');



var para4 = document.createElement('p');
para4.innerText= productData.description;
rightDiv.append(para4);
para4.classList.add('para4');

var para5= document.createElement('p');
para5.innerText= "Product Preview";
rightDiv.append(para5);
para5.classList.add('para5');


var imgDiv= document.createElement('div');
rightDiv.append(imgDiv);
imgDiv.classList.add('imgDiv');



var img1= document.createElement('img');
img1.src= productData.photos[0];
img1.alt = "photos";
imgDiv.append(img1);
img1.classList.add('image');










var img2= document.createElement('img');
img2.src= productData.photos[1];
img2.alt = "photos";
imgDiv.append(img2);
img2.classList.add('image');









var img3= document.createElement('img');
img3.src= productData.photos[2];
img3.alt = "photos";
imgDiv.append(img3);
img3.classList.add('image');






var img4= document.createElement('img');
img4.src= productData.photos[3];
img4.alt = "photos";
imgDiv.append(img4);
img4.classList.add('image');






var img5= document.createElement('img');
img5.src= productData.photos[4];
img5.alt = "photos";
imgDiv.append(img5);
img5.classList.add('image');



function border1(){

  img1.classList.add('border');

  img2.classList.remove('border');
  img3.classList.remove('border');
  img4.classList.remove('border');
  img5.classList.remove('border');

 
  
 

}

function border2(){

  img2.classList.add('border');

  
  img1.classList.remove('border');
  img3.classList.remove('border');
  img4.classList.remove('border');
  img5.classList.remove('border');

 
  
 

}


function border3(){

  img3.classList.add('border');

  
  img2.classList.remove('border');
  img1.classList.remove('border');
  img4.classList.remove('border');
  img5.classList.remove('border');

 
  
 

}

function border4(){

  
  img2.classList.remove('border');
  img3.classList.remove('border');
  img1.classList.remove('border');
  img5.classList.remove('border');


  img4.classList.add('border');
 
  
 

}
function border5(){


  
  img2.classList.remove('border');
  img3.classList.remove('border');
  img4.classList.remove('border');
  img1.classList.remove('border');


  img5.classList.add('border');
 
  
 

}


if(productData.preview === productData.photos[0]){
  img1.classList.add('border');
}




















  


img1.addEventListener("click",function(){


 border1();

  
  
  
  

  

  
  leftImg.src= img1.src;

  
  

});



img2.addEventListener("click",function(){
  
border2();
  
 
  leftImg.src= img2.src;
 
});



img3.addEventListener("click",function(){

  border3();
  
  leftImg.src= img3.src;
});



img4.addEventListener("click",function(){

  border4();
 
  leftImg.src= img4.src;
});


img5.addEventListener("click",function(){

  border5();
  leftImg.src= img5.src;
});


var btn = document.createElement('button')
btn.innerText= "Add to Cart";
rightDiv.append(btn);
btn.classList.add('btn')