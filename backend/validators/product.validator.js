import {body , validationResult} from 'express-validator';

export function productValidator(req, res, next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            message: errors.array().map(item => item.msg).join(', '),
        })
    }
    next();
}

const productValidatorRules = [
    body('name').trim().not().isEmpty().withMessage('Name is required'),
    body('price.amount').isFloat().withMessage('Price must be a number'),
    body('price.currency').isIn(['INR', 'USD', 'EUR']).withMessage('Currency must be INR, USD, or EUR'),
    body('description').trim().not().isEmpty().withMessage('Description is required'),
    body('image.url').trim().not().isEmpty().withMessage('Image URL is required'),

    productValidator
]
