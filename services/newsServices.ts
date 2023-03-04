//import NewsRepository
import newsRepository from '../repository/repository';

//create new class NewsService
class NewsService {
    get() {
        return newsRepository.find({});
    }

    getById(_id: String) {
        return newsRepository.findById(_id);
    }

    create(news: object) {
        return newsRepository.create(news)
    }

    update(_id: String, news: object) {
        return newsRepository.findByIdAndUpdate(_id, news)
    }

    delete(_id: String) {
        return newsRepository.findByIdAndRemove(_id)
    }
}

//exeport default new...

export default new NewsService();