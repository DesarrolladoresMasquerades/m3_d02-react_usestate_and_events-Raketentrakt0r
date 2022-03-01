export default function WeatherWidget(){
    const {city,icon,celsius,unit} = props;
    return (
    
        <div>

            <h1>Widget in {city} </h1>
            <span>{icon}</span>

            <h2>
                {celsius} °{unit}
            </h2>
        </div>
            )
}