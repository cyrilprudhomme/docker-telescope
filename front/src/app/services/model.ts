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
