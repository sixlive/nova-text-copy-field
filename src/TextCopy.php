<?php

namespace Sixlive\TextCopy;

use Laravel\Nova\Fields\Field;

class TextCopy extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'text-copy';

    /**
     * Truncate the fields displayed value.
     *
     * @param  int $length
     * @return \Sixlive\TextCopy\TextCopy
     */
    public function truncate($length = 0)
    {
        $this->withMeta(['truncate' => $length]);

        return $this;
    }
}
