const createStudent = async (req: Request, res: Response) => {
    try {
      const { student: studentData } = req.body;
      
      // data validation using zod
      const zodParsedData = StudentValidationSchema.parse(studentData);
  
      // joi validation error handle
      // if (error) {
      //   res.status(500).json({
      //     succuess: false,
      //     message: 'Something went wrong',
      //     error: error.details,
      //   });
      // }
  
      // will call service func to send this data
      const result = await StudentServices.createStudentIntoDB(zodParsedData);
  
      // send response
      res.status(200).json({
        succuess: true,
        message: 'Student is created sucessfully',
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        succuess: false,
        message: 'Something went wrong',
        error: err,
      });
    }
  };