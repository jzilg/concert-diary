import { Concerts } from '../../entities/Concert.interface'
import { Festivals } from '../../entities/Festival.interface';

export default interface State {
    concerts: Concerts
    festivals: Festivals
}
