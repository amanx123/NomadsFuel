import axios from 'axios'
export default async function Location({ params }: { params: { location: string } }) {
    const data = await axios.get(`https://api.weatherapi.com/v1/current.json?q=${params.location}&key=${process.env.WEATHER_API_KEY}`).then(res => res.data)
    return (

        <div className='flex flex-col '>
            <h1>  Location to render: {params.location}</h1>
            <h1>Current Temp : {data.current.temp_c}</h1>
        </div>
    )

}