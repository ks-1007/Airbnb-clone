export const DaysCalculator = ({ checkIn, checkOut }) => {
  //   console.log(checkIn, checkOut, "hello")

  // To calculate the time difference of two dates
  const Difference_In_Time = checkOut.getTime() - checkIn.getTime() + 1

  // To calculate the no. of days between two dates
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

  // console.log(Difference_In_Days,"Difference_In_Days")
  return Difference_In_Days
}
