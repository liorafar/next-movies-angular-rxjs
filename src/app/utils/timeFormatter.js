// To do: replace with library similar to 'moment'y
export class TimeFormatter{
    formatTimeToMinutes(time){
        const timeSplit = time.split('h');
        const minutes = timeSplit[1].split('m')[0];
        const hours = timeSplit[0];
        const totalMinutes = hours * 60 + +minutes;
        
        return totalMinutes;
    }
}