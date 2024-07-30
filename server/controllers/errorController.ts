const getErr = (_req: Request, res: any) => {
	res.status(404).send({ message: 'Not Found' });
};

export { getErr };
