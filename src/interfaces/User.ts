interface IUser {
  id: number,
  nickname: string,
  registration_date: Date,
  country_id: string,
  address: {
    city: string,
    state: string,
  },
  user_type: string,
  tags: string[],
  logo: string | null,
  points: number,
  site_id: string,
  permalink: string,
  status: { site_status: string }
}

export default IUser;