interface ISeller {
  id: number,
  nickname: string,
  car_dealer: boolean,
  real_estate_agency: boolean,
  registration_date: Date,
  tags: string[],
  car_dealer_logo: string,
  permalink: string,
}

export default ISeller;