module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Event", {
        organizer: {
        type: DataTypes.STRING,
        len: [0, 20],
        unique: true
      },
       name :{
        type: DataTypes.STRING,
        validate: 
         { notContains : "event"}
       },

      email: {
        type: DataTypes.STRING,
        validate: {isEmail: true, 
         notEmpty: true,}

      }, 
      image: {
        type: DataTypes.STRING,
        validate:{ allowNull:false,}
      },
      numOfSeats: {
        type: DataTypes.INTEGER,
        validate:{ min: 0}

      },
      bookedSeats : {
        type: DataTypes.INTEGER,
        isMax(value) {
            if(+value > this.numOfSeats) {
                throw new Error("numOfSeats must be greater than bookedSeates.");
            }
        } 
      },
      startDate: {
        type: DataTypes.DATE,
        validate: {
            isDate: true,
            isAfter: new Date().toISOString().slice(0, 10),
            check(value) {
              if (this.endDate === null && value === null) {
                throw new Error("both cannt be null");
              }
            },
          },
      },
      endDate: {
        type: DataTypes.DATE

      }
      
    },
    { timestamps: false }
    );
  }
