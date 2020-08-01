
export default async (param) => {
  try {
    const {
      name, pass,
    } = param;
    const result = 'success';
    const message = '';
    return {
      result,
      message,
      conform: {
        name,
        pass,
      }
    };
  } catch (e) {
    console.log(e);
  }
}

