import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const salesType = defineType({
    name: 'sale',
    title: 'Sale',
    type: 'document',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Sale Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Sale Description',
            type: 'text',
        }),
        defineField({
            name: 'discountAmount',
            title: 'Discount Amount',
            type: 'number',
            description: 'Amount in percentage of fixed value',
        }),
        defineField({
            name: 'couponCode',
            type: 'string',
            title: 'Coupon Code',
        }),
        defineField({
            name: 'validFrom',
            type: 'datetime',
            title: 'Valid From',
        }),
        defineField({
            name: 'validUntil',
            type: 'datetime',
            title: 'Valid Until',
        }),
        defineField({
            name: 'isActive',
            type: 'boolean',
            title: 'Is Active',
            description: 'Toggle to activate / deactive the sale',
            initialValue: true,
        }),
    ],

    preview: {
        select: {
            title: 'title',
            discountAmount: 'discountAmount',
            couponCode: 'couponCode',
            isActive: 'isActive',
        },

        prepare(selection) {
            const { title, discountAmount, couponCode, isActive } = selection
            const status = isActive ? 'Active' : 'Inactive'

            return {
                title,
                subtitle: `${discountAmount}% Off - Code: ${couponCode} - ${status}`,
            }
        },
    },
})
