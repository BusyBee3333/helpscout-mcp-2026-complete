import type { HelpScoutClient } from '../api/client.js';
import type { Customer, CustomerEmail, CustomerPhone, CustomerAddress } from '../types/index.js';

export function registerCustomerTools(client: HelpScoutClient) {
  return [
    {
      name: 'helpscout_list_customers',
      description: 'List customers with optional filters (email, first name, last name, query)',
      inputSchema: {
        type: 'object',
        properties: {
          email: { type: 'string', description: 'Filter by email' },
          firstName: { type: 'string', description: 'Filter by first name' },
          lastName: { type: 'string', description: 'Filter by last name' },
          query: { type: 'string', description: 'Search query' },
          mailbox: { type: 'number', description: 'Filter by mailbox ID' },
          page: { type: 'number', description: 'Page number (default: 1)' },
        },
      },
      handler: async (args: any) => {
        const customers = await client.getAllPages<Customer>(
          '/customers',
          args,
          'customers'
        );
        return { customers, count: customers.length };
      },
    },
    {
      name: 'helpscout_get_customer',
      description: 'Get a customer by ID with full details',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Customer ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: number }) => {
        const customer = await client.get<Customer>(`/customers/${args.id}`);
        return customer;
      },
    },
    {
      name: 'helpscout_create_customer',
      description: 'Create a new customer',
      inputSchema: {
        type: 'object',
        properties: {
          firstName: { type: 'string', description: 'First name' },
          lastName: { type: 'string', description: 'Last name' },
          email: { type: 'string', description: 'Primary email' },
          phone: { type: 'string', description: 'Primary phone' },
          organization: { type: 'string', description: 'Organization name' },
          jobTitle: { type: 'string', description: 'Job title' },
          photoUrl: { type: 'string', description: 'Photo URL' },
          background: { type: 'string', description: 'Background/notes' },
          location: { type: 'string', description: 'Location' },
          age: { type: 'string', description: 'Age' },
          gender: { type: 'string', description: 'Gender' },
        },
        required: ['firstName', 'lastName'],
      },
      handler: async (args: any) => {
        const response = await client.post<{ id: number }>(
          '/customers',
          args
        );
        return response;
      },
    },
    {
      name: 'helpscout_update_customer',
      description: 'Update customer properties',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Customer ID' },
          op: {
            type: 'string',
            enum: ['replace', 'remove'],
            description: 'Operation type',
          },
          path: {
            type: 'string',
            description: 'Property path (e.g., /firstName, /email)',
          },
          value: { description: 'New value' },
        },
        required: ['id', 'op', 'path'],
      },
      handler: async (args: any) => {
        const { id, op, path, value } = args;
        await client.patch(`/customers/${id}`, { op, path, value });
        return { success: true, message: 'Customer updated' };
      },
    },
    {
      name: 'helpscout_delete_customer',
      description: 'Delete a customer permanently',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Customer ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: number }) => {
        await client.delete(`/customers/${args.id}`);
        return { success: true, message: 'Customer deleted' };
      },
    },
    {
      name: 'helpscout_list_customer_emails',
      description: 'List all emails for a customer',
      inputSchema: {
        type: 'object',
        properties: {
          customerId: { type: 'number', description: 'Customer ID' },
        },
        required: ['customerId'],
      },
      handler: async (args: { customerId: number }) => {
        const emails = await client.getAllPages<CustomerEmail>(
          `/customers/${args.customerId}/emails`,
          {},
          'emails'
        );
        return { emails, count: emails.length };
      },
    },
    {
      name: 'helpscout_create_customer_email',
      description: 'Add an email address to a customer',
      inputSchema: {
        type: 'object',
        properties: {
          customerId: { type: 'number', description: 'Customer ID' },
          value: { type: 'string', description: 'Email address' },
          type: {
            type: 'string',
            enum: ['work', 'home', 'other'],
            description: 'Email type',
          },
          location: { type: 'string', description: 'Location label' },
        },
        required: ['customerId', 'value'],
      },
      handler: async (args: any) => {
        const { customerId, ...emailData } = args;
        const response = await client.post(
          `/customers/${customerId}/emails`,
          emailData
        );
        return response;
      },
    },
    {
      name: 'helpscout_list_customer_phones',
      description: 'List all phone numbers for a customer',
      inputSchema: {
        type: 'object',
        properties: {
          customerId: { type: 'number', description: 'Customer ID' },
        },
        required: ['customerId'],
      },
      handler: async (args: { customerId: number }) => {
        const phones = await client.getAllPages<CustomerPhone>(
          `/customers/${args.customerId}/phones`,
          {},
          'phones'
        );
        return { phones, count: phones.length };
      },
    },
    {
      name: 'helpscout_create_customer_phone',
      description: 'Add a phone number to a customer',
      inputSchema: {
        type: 'object',
        properties: {
          customerId: { type: 'number', description: 'Customer ID' },
          value: { type: 'string', description: 'Phone number' },
          type: {
            type: 'string',
            enum: ['work', 'home', 'mobile', 'fax', 'other'],
            description: 'Phone type',
          },
          location: { type: 'string', description: 'Location label' },
        },
        required: ['customerId', 'value'],
      },
      handler: async (args: any) => {
        const { customerId, ...phoneData } = args;
        const response = await client.post(
          `/customers/${customerId}/phones`,
          phoneData
        );
        return response;
      },
    },
    {
      name: 'helpscout_list_customer_addresses',
      description: 'List all addresses for a customer',
      inputSchema: {
        type: 'object',
        properties: {
          customerId: { type: 'number', description: 'Customer ID' },
        },
        required: ['customerId'],
      },
      handler: async (args: { customerId: number }) => {
        const addresses = await client.getAllPages<CustomerAddress>(
          `/customers/${args.customerId}/addresses`,
          {},
          'addresses'
        );
        return { addresses, count: addresses.length };
      },
    },
    {
      name: 'helpscout_create_customer_address',
      description: 'Add an address to a customer',
      inputSchema: {
        type: 'object',
        properties: {
          customerId: { type: 'number', description: 'Customer ID' },
          city: { type: 'string', description: 'City' },
          state: { type: 'string', description: 'State/Province' },
          postalCode: { type: 'string', description: 'Postal code' },
          country: { type: 'string', description: 'Country code (ISO 3166-1 alpha-2)' },
          lines: {
            type: 'array',
            items: { type: 'string' },
            description: 'Address lines',
          },
        },
        required: ['customerId', 'city', 'country'],
      },
      handler: async (args: any) => {
        const { customerId, ...addressData } = args;
        const response = await client.post(
          `/customers/${customerId}/addresses`,
          addressData
        );
        return response;
      },
    },
    {
      name: 'helpscout_list_customer_properties',
      description: 'List all custom properties for a customer',
      inputSchema: {
        type: 'object',
        properties: {
          customerId: { type: 'number', description: 'Customer ID' },
        },
        required: ['customerId'],
      },
      handler: async (args: { customerId: number }) => {
        const properties = await client.get<any>(
          `/customers/${args.customerId}/properties`
        );
        return properties;
      },
    },
  ];
}
