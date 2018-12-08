import { Alice } from './../users/mock-users';
import { Policy, FieldTypes } from 'src/app/root-store/models';

export const mockPolicies: Policy[] =  [
  {
    uuid: '4b3e806fb6ed499282e4c3fd7c052dfb',
    createdAt: new Date(2018, 12, 8, 15, 30, 25),
    createdBy: Alice,
    organization: 'Wonderland Co',
    name: 'Rabbit hole accident insurance',
    slug: 'rabbit-hole-accident-insurance',
    description: 'In case anyone falls down a rabbit hole',
    premium: 1000,
    deductible: 300,
    fields: [
      {
        uuid: '2194e06e68674900a2bff9c2038deb25',
        name: 'Name',
        slug: 'name',
        dataType: FieldTypes.Text,
        helpText: 'Please enter your full name',
        value: 'Alice of Wonderland'
      },
      {
        uuid: '24939fea66ab454e9409a110b60d8868',
        name: 'Employee number',
        slug: 'employee-number',
        dataType: FieldTypes.Text,
        helpText: 'Please enter your full name',
        value: '52',
      },
      {
        uuid: 'b71b82dc02054d71926162a0936b17ee',
        name: 'Gender',
        slug: 'gender',
        dataType: FieldTypes.Choice,
        helpText: 'Please enter your full name',
        value: 1,
        choices: ['Male', 'Female', 'Rather not say'],
        default: 2
      },
    ]
  },
  {
    uuid: 'c71b24b99d2f4fd6a34dc1732cf1e5fc',
    createdAt: new Date(2018, 11, 8, 15, 30, 25),
    createdBy: Alice,
    organization: 'Wonderlanc Co',
    name: 'Hat insurance',
    slug: 'hat-insurance',
    description: 'In case anyone loses their precious hat',
    premium: 1000,
    deductible: 300,
    fields: [
      {
        uuid: 'e4dbce6cb08b41ed88cd0eae93dcfab7',
        name: 'Name',
        slug: 'name',
        dataType: FieldTypes.Text,
        helpText: 'Please enter your full name',
        value: 'Alice of Wonderland'
      },
      {
        uuid: 'd9ad7c5c763e4a7c905a97fec8bf048c',
        name: 'Hat ID',
        slug: 'hat-id',
        dataType: FieldTypes.Number,
        helpText: 'Please enter the number identifying your hat',
        value: '52',
      },
      {
        uuid: 'd660436c53b34f41b9ed35dbdab1dfba',
        name: 'Profession',
        slug: 'profession',
        dataType: FieldTypes.Choice,
        helpText: 'Please select your profession',
        value: 1,
        choices: ['Hatter', 'Traveler', 'Knight', 'Queen'],
        default: 0
      },
    ]
  },
]
