import express from 'express';

import fakeValue from '../fake.json';

const get = (req: express.Request, res: express.Response) => {
    res.status(200).send({ value_meter_square: fakeValue.value_meter_square });
}

export default { get };