<?php declare(strict_types=1);

namespace Macademy\InventoryFulfillment\Controller\Index;

use Magento\Framework\App\Action\HttpPostActionInterface;
use Magento\Framework\Controller\Result\Json;
use Magento\Framework\Controller\Result\JsonFactory;

class Post implements HttpPostActionInterface
{
    /** @var JsonFactory */
    private $jsonFactory;

    /**
     * @param JsonFactory $jsonFactory
     */
    public function __construct(
        JsonFactory $jsonFactory
    ) {
        $this->jsonFactory = $jsonFactory;
    }

    /**
     * @return Json
     */
    public function execute(): Json
    {
        $json = $this->jsonFactory->create();

        return $json->setData(['success' => true]);
    }
}
