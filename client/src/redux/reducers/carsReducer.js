const initialData = {
    cars : [],

};

// export const carsReducer = (state=initialData , action)=>{

//      switch(action.type)
//      {
//          case 'GET_ALL_CARS' : {
//              return{
//                  ...state,
//                  cars : action.payload
//              }
//          }
         
//          default:return state
//      }

// }

export const carsReducer = (state = initialData, action) => {
    switch (action.type) {
      case 'GET_ALL_CARS': {
        console.log('GET_ALL_CARS action dispatched');
        return {
          ...state,
          cars: action.payload,
        };
      }
      case 'FILTER_BY_FUEL_TYPE': {
        console.log('FILTER_BY_FUEL_TYPE action dispatched');
        const { fuelType } = action.payload;
        const filteredCars = state.cars.filter((car) => car.fuelType === fuelType);
        return {
          ...state,
          cars: filteredCars,
        };
      }
      // Add more cases if you need to handle additional filters
      default:
        return state;
    }
  };
  
