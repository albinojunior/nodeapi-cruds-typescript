export class ExampleService {
  public example = async (method: string): Promise<string> => {
    /* this is a example */
    if (method !== "GET") throw new Error("Method not allowed!");
    return "example run successfuly!";
  };
}

export default new ExampleService();
