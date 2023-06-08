const houseBlueprint = {
    address: '',
    date: new Date(),
    description: '',
    owner: '',
    size: 0,
    _building_speed: 0.5,
    getDaysToBuild: function() {
      return Math.ceil(this.size * 2);
    }
  };
  
  // houseBuilder - Constructor
function HouseBuilder(address, description, owner, size, roomCount) {
    const house = Object.create(houseBlueprint); // Create a new object with houseBlueprint as the prototype
    house.address = address;
    house.description = description;
    house.owner = owner;
    house.size = size;
    house.roomCount = roomCount;
    return house;
};

export default HouseBuilder;