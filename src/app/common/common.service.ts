import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

    getYearsRange(): Array<any>{
        let currentYear: number = new Date().getFullYear();
        let years: Array<any> = [];
        let startYear: number = 1950;

        while ( startYear < currentYear ) {
            startYear++;
            years.push({
                name: startYear,
                text: startYear
            });
        }

        return years;
    }

    getDaysRange(): Array<any>{
        let days: Array<any> = [];
        let startDay: number = 0;

        while ( startDay < 31 ) {
            startDay++;
            days.push({
                name: startDay,
                text: startDay
            });
        }
        
        return days;
    }

    getMontsRange(): Array<any>{
        let months: Array<any> = [];
        let startMonth: number = 0;

        while ( startMonth < 12 ) {
            startMonth++;
            months.push({
                name: startMonth,
                text: startMonth
            });
        }

        return months;
    }

    getQueryParams(filters: any): string {
        let paramString: string = '?';
        for(var key in filters) {
            paramString += 'filter[' + key + ']=' + filters[key] + '&';
        }
        paramString = paramString.substring(0, paramString.length - 1);
        return paramString;
    }

}
