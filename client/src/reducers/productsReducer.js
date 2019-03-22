const productsReducer = (state = [
  {id:1,name:'APPLE IPHONE XS',price:216000,display:5.8,battery:2658,camera:'12 MP + 12 MP', storage:'	64/256/512 GB, 4 GB RAM',src:'images/image1.jpg',quan:1},
  {id:2,name:'APPLE IPHONE XS MAX',price:237000,display:6.5,battery:3174,camera:'12 MP + 12 MP', storage:'	64/256/512 GB, 4 GB RAM',src:'images/image2.jpg',quan:1},
  {id:3,name:'OPPO FIND X',price:178000,display:6.42,battery:3400,camera:'Dual: 16 MP + 20 MP', storage:'512 GB, 8 GB RAM',src:'images/image3.jpg',quan:1},
  {id:4,name:'HUAWEI MATE 20 PRO',price:160000,display:6.39,battery:4200,camera:'40 MP + 20 MP + 8 MP', storage:'256 GB, 8 GB RAM',src:'images/image4.jpg',quan:1},
  {id:5,name:'GALAXY NOTE 9',price:139999,display:6.4,battery:4000,camera:'12 MP + 12 MP', storage:'512 GB, 8 GB RAM',src:'images/image5.jpg',quan:1},
  {id:6,name:'NOKIA 9',price:108000,display:5.5,battery:3250,camera:'Dual: 13 MP', storage:'64/128 GB, 4 GB RAM',src:'images/image6.jpg',quan:1},
  {id:7,name:'OPPO RX17 PRO',price:109999,display:6.4,battery:3700,camera:'Triple camera', storage:'128 GB, 6/8 GB RAM',src:'images/image7.jpg',quan:1},
  {id:8,name:'SAMSUNG GALAXY S9',price:91000,display:5.8,battery:3000,camera:'12MP', storage:'64/128/256 GB, 4 GB RAM',src:'images/image8.jpg',quan:1},
  {id:9,name:'APPLE IPHONE 7 PLUS',price:82500,display:5.5,battery:2900,camera:'Dual: 12 MP + 12 MP', storage:'32/128/256 GB, 3 GB RAM',src:'images/image9.jpg',quan:1},
], action) => {
    switch (action.type) {
      default:
        return state;
    }
  }
  
  export default productsReducer