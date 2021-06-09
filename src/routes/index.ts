import {Router} from 'express';
import {Customer} from '../models/customer'

const customers: Customer[] = [];
const router = Router();

type RequestBody = {
    id: number,
    name: string,
    birthDate: string
}

router.get('/', (req, res) => {
    res.json(customers);
})

router.post('/b', (req, res) => {
    const body = req.body as RequestBody;
    const newCustomer : Customer = {
        id: parseInt(req.body.id),
        name: req.body.name,
        birthDate: new Date().toLocaleString()
    };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
})

export default router;