import Question from '../models/question';

export const listPopulerTags = async (req, res, next) => {
  try {
    const tags = await Question.aggregate([
      { $project: { tags: 1 } },
      { $unwind: '$tags' },
      { $group: { _id: '$tags', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 25 }
    ]);
    res.json(tags);
  } catch (error) {
    next(error);
  }
};

export const listTags = async (req, res, next) => {
  try {
    const tags = await Question.aggregate([
      { $project: { tags: 1 } },
      { $unwind: '$tags' },
      { $group: { _id: '$tags', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    res.json(tags);
  } catch (error) {
    next(error);
  }
};

export const searchTags = async (req, res, next) => {
  const { tag = '' } = req.params;
  try {
    const tags = await Question.aggregate([
      { $project: { tags: 1 } },
      { $unwind: '$tags' },
      { $group: { _id: '$tags', count: { $sum: 1 } } },
      { $match: { _id: { $regex: tag, $options: 'i' } } },
      { $sort: { count: -1 } }
    ]);
    res.json(tags);
  } catch (error) {
    next(error);
  }
};
