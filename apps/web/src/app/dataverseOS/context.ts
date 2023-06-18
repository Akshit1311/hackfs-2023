import { RuntimeConnector } from "@dataverse/runtime-connector";
import { createContext } from "react";
import { runtimeConnector } from "../../utils/dataversOS";
interface Model {
  name: string;
  stream_id: string;
  isPublicDomain: boolean;
  encryptable?: string[];
}
interface Output {
  createDapp: {
    id?: string;
    streamIDs: Model[];
    website: string;
    name: string;
    slug: string;
    logo: string;
    description: string;
    defaultFolderName: string;
  };
}

interface ContextType {
  runtimeConnector: RuntimeConnector;
  appVersion: string;
  postModel: Model;
  indexFilesModel: Model;
  output: Output;
}

export const Context = createContext<ContextType>({
  runtimeConnector: runtimeConnector,
  appVersion: "",
  postModel: {},
});
