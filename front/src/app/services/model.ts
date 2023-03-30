export interface ContainerInfo {
  Id: string;
  Names: string[];
  Image: string;
  ImageID: string;
  Command: string;
  Created: number;
  Ports: Port[];
  // TODO Mettre en place les labels dans les affichages
  Labels: { [label: string]: string };
  State: string;
  Status: string;
  HostConfig: {
    NetworkMode: string;
  };
  NetworkSettings: {
    Networks: { [networkType: string]: NetworkInfo };
  };
  Mounts: Array<{
    Name?: string | undefined;
    Type: string;
    Source: string;
    Destination: string;
    Driver?: string | undefined;
    Mode: string;
    RW: boolean;
    Propagation: string;
  }>;
}

interface Port {
  IP: string;
  PrivatePort: number;
  PublicPort: number;
  Type: string;
}

interface NetworkInfo {
  IPAMConfig?: any;
  Links?: any;
  Aliases?: any;
  NetworkID: string;
  EndpointID: string;
  Gateway: string;
  IPAddress: string;
  IPPrefixLen: number;
  IPv6Gateway: string;
  GlobalIPv6Address: string;
  GlobalIPv6PrefixLen: number;
  MacAddress: string;
}

export interface ImageInfo {
  Id: string;
  ParentId: string;
  RepoTags: string[] | undefined;
  RepoDigests?: string[] | undefined;
  Created: number;
  Size: number;
  VirtualSize: number;
  SharedSize: number;
  // TODO Mettre en place les labels dans les affichages
  Labels: { [label: string]: string };
  Containers: number;
}

export interface Config {
  Id: string,
}

export interface VolumesInfos {

  Name: string,
  Driver: string,
  Mountpoint: string,
  CreatedAt: string,
  Status: {
    "hello": string,
  },
  Labels: {
    "com.example.some-label": string,
    "com.example.some-other-label": string,
  },
  Scope: string,
  ClusterVolume: {
    ID: string,
    Version: Array<{}>,
    CreatedAt: string,
    UpdatedAt: string,
    Spec: Array<{}>,
    Info: Array<{}>,
    PublishStatus: Array<{}>,
  },
  Options: {
    device: string,
    o: string,
    type: string,
  },
  UsageData: {
    Size: number,
    RefCount: number,
  }
}

export interface NetworksInfos {
  Name: string,
  Id: string,
  Created: string,
  Scope: string,
  Driver: string,
  EnableIPv6: boolean,
  IPAM: Array<{
    Driver: string,
    Config: Array<{
      Subnet: string,
      Gateway: string,
    }>,
    Options: Array<{
      foo: string
    }>,
  }>
  Internal: boolean,
  Attachable: boolean,
  Ingress: boolean,
  "Containers": Array<{
    label: Array<{
      Name: string,
      EndpointID: string,
      MacAddress: string,
      IPv4Address: string,
      IPv6Address: string
    }>
  }>,
  "Options": Array<{}>,
  "Labels": Array<{}>

}
