# -*- coding: utf-8 -*-

{
    'name': "Product Migration",
    'version': '15.0.1.0.0',
    'author': 'R',
    'website': "https://www.cybrosys.com",
    'depends': ['base', 'web', 'sale', 'sale_management'],
    'assets': {
        'web.assets_backend': {
            '/product_migration/static/src/js/product_fetch.js',
        },
        'web.assets_qweb': {
            '/product_migration/static/src/xml/product_fetch.xml',
        },
    },
    'data': [
        'security/ir.model.access.csv',
        # 'views/product_fetch.xml',
    ],
    'license': 'LGPL-3',
    'installable': True,
    'application': True,
    'auto_install': False,
}
