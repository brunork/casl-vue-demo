// const { AbilityBuilder } = require('casl');

// export function(type) {
//     AbilityBuilder.define(can => {
//         switch (type) {
//             case 'guest':
//                 console.log('role: Guest')
//                 can('read', 'Post');
//                 break;
//             case 'manager':
//                 console.log('role: Manager')
//                 can('read', 'Post');
//                 can(['update'], 'Post');
//                 break;
//             case 'admin':
//                 console.log('role: Admin')
//                 can('read', 'Post');
//                 can(['update', 'delete'], 'Post');
//                 break;
//             // More roles here
//         }
//     }
// };