import {model, property} from '@loopback/repository';
import {CommonEntity} from '.';

@model()
export class Service extends CommonEntity {
  @property({
    type: 'string',
    required: true,
    schema: {
      create: true,
      response: true,
      required: true,
      example: 'HTTP',
    },
  })
  type: string;

  @property({
    type: 'string',
    required: true,
    schema: {
      create: true,
      required: true,
      response: true,
      example: '11111111-2222-3333-4444-555555555555',
    },
  })
  applicationId: string;

  @property({
    type: 'boolean',
    required: false,
    default: true,
  })
  addressStatus: boolean;

  @property({
    type: 'string',
    required: false,
  })
  clientTLS?: string;

  @property({
    type: 'object',
    required: false,
  })
  clonePools?: object;

  @property({
    type: 'boolean',
    required: false,
    default: true,
  })
  enable: boolean;

  @property({
    type: 'string',
    required: false,
  })
  fallbackPersistenceMethod?: string;

  @property({
    type: 'string',
    required: false,
  })
  lastHop?: string;

  @property({
    type: 'string',
    required: false,
  })
  layer4?: string;

  @property({
    type: 'number',
    required: false,
    default: 0,
  })
  maxConnections: number;

  @property({
    type: 'object',
    required: false,
  })
  metadata: object;

  @property({
    type: 'string',
    required: false,
  })
  mirroring?: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: false,
  })
  persistenceMethods?: string[];

  @property({
    type: 'string',
    required: false,
  })
  policyFirewallEnforced?: string;

  @property({
    type: 'string',
    required: false,
  })
  policyFirewallStaged?: string;

  @property({
    type: 'string',
    required: false,
  })
  policyIAM?: string;

  @property({
    type: 'string',
    required: false,
  })
  policyNAT?: string;

  @property({
    type: 'string',
    required: false,
    schema: {
      create: true,
      update: true,
      response: true,
      example: '11111111-2222-3333-4444-555555555555',
    },
  })
  pool?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileAnalytics?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileClassification?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileDiameterEndpoint?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileDNS?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileDOS?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileEnforcement?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileFIX?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileFTP?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileHTTP?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileHTTPAcceleration?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileHTTPCompression?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileIPOther?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileMultiplex?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileL4?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileRADIUS?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileRewrite?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileSIP?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileSubscriberManagement?: string;

  @property({
    type: 'object',
    required: false,
  })
  profileTCP?: object;

  @property({
    type: 'string',
    required: false,
  })
  profileTrafficLog?: string;

  @property({
    type: 'string',
    required: false,
  })
  profileUDP?: string;

  @property({
    type: 'boolean',
    required: false,
    default: true,
  })
  redirect80?: boolean;

  @property({
    type: 'string',
    required: false,
  })
  serverTLS?: string;

  @property({
    type: 'string',
    required: false,
  })
  snat?: string;

  @property({
    type: 'boolean',
    required: false,
    default: false,
  })
  translateClientPort: boolean;

  @property({
    type: 'boolean',
    required: false,
    default: true,
  })
  translateServerAddress: boolean;

  @property({
    type: 'boolean',
    required: false,
    default: true,
  })
  translateServerPort: boolean;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
    schema: {
      create: true,
      update: true,
      required: true,
      response: true,
      example: ['10.100.0.1'],
    },
  })
  virtualAddresses: string[];

  @property({
    type: 'number',
    required: false,
    default: 80,
    schema: {
      create: true,
      update: true,
      response: true,
      example: '80',
    },
  })
  virtualPort: number;

  //TODO: delete this property after many-to-many relation is done
  @property({
    type: 'string',
    required: false,
  })
  endpointpolicy: string;

  //TODO: many-to-many relation to other objects
  // iRules
  // policyEndpoint
  // allowVlans
  // rejectVlans
  // securityLogProfiles

  constructor(data?: Partial<Service>) {
    super(data);
  }
}
