class Uber {
  constructor(
    cartype,
    basePrice,
    distance,
    time,
    costPerKm,
    costPerMin,
    demandPrice
  ) {
    this._cartype = cartype;
    this._basePrice = basePrice;
    this._distance = distance;
    this._time = time;
    this._costPerKm = costPerKm;
    this._costPerMin = costPerMin;
    this._demandPrice = demandPrice;
  }

  getPrice() {
    return (
      this._basePrice +
      this._distance * this._costPerKm +
      this._time * this._costPerMin +
      this._demandPrice
    );
  }
}

const uberProperties = {
  cartype: "Mini",
  basePrice: 10,
  distance: 10,
  time: 30,
  costPerKm: 1.5,
  costPerMin: 0.5,
  demandPrice: 15,
};

const uber = new Uber(
  uberProperties.cartype,
  uberProperties.basePrice,
  uberProperties.distance,
  uberProperties.time,
  uberProperties.costPerKm,
  uberProperties.costPerMin,
  uberProperties.demandPrice
);

console.log("Uber fare =", uber.getPrice());
