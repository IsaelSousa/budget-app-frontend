import { Routes } from "@/types/default";

export default class Payload {
    static modules: Routes[] = [ 
        { name: 'Budget', navigatoTo: '/budget' }, 
        { name: 'Chat', navigatoTo: '' }, 
        { name: 'Home', navigatoTo: '' }, 
        { name: 'Config', navigatoTo: '' }, 
        { name: 'People', navigatoTo: '' }, 
        { name: 'Only Friends', navigatoTo: '' }
    ]
}