import {Schema, model} from 'mongoose';

import mongoosePaginet from 'mongoose-paginate-v2';

const apire = new Schema({
    Title: {
        type: String,
        required: true,
        trim: true
    },
    Description: {
        type: String,
        trim: true
    },
    Done: {
        type: Boolean,
        default: false
    }
},{
    versionKey: false,
    timestamps: true
});

apire.plugin(mongoosePaginet);
export default model('API', apire);